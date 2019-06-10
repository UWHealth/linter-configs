/* eslint-disable */
const path = require('path');
const CLIEngine = require("eslint").CLIEngine;
const stylelint = require('stylelint');

const { formatMessage, getRelative, formatTable } = require('./utils.tests.js')

/**
 * Rudimentary test for eslint configs,
 * Only verifies the correct number of expected errors and warnings
 */
function testESLint() {
    const EXPECTED_ERRORS = 9;
    const EXPECTED_WARNINGS = 10;

    const cli = new CLIEngine({
        configFile: require.resolve('./.eslintrc.js'),
        cwd: __dirname,
    });
    // const formatter = cli.getFormatter("table");

    const report = cli.executeOnFiles(['./**/*.js', './**/*.html']);
    const files = report.results.map((file) => {
        return getRelative(file.filePath);
    }).join(', ');

    const table = formatTable({
        errors: report.errorCount,
        warnings: report.warningCount,
        EXPECTED_ERRORS,
        EXPECTED_WARNINGS,
    });

    console.info(formatMessage(
        'ESLINT', [table.errors.passed, table.warnings.passed], files
    ));
    console.table(table);
}

/**
 * Rudimentary test for stylelint configs,
 * Only verifies the correct number of expected errors and warnings
 */
function testStyleLint() {
    const EXPECTED_ERRORS = 14;
    const EXPECTED_WARNINGS = 0; //stylelint only errors (I guess?)

    const report = stylelint.lint({
        config: require('./.stylelintrc.js'),
        configBasedir: path.resolve(__dirname, '../packages/stylelint-config'),
        files: ['./**/*.(scss|css|html)'],
        formatter: 'compact',
        globbyOptions: {
            cwd: __dirname
        }
    });

    report.then(report => {
        let files = [];
        let errors = 0;
        let warnings = 0;

        // Get all errors/warnings and file listings
        report.results.forEach((file) => {
            files.push(getRelative(file.source));
            file.warnings.forEach(msg => {
                errors = msg.severity === "error"
                    ? errors + 1
                    : errors;
                warnings = msg.severity === "warning"
                    ? warnings + 1
                    : warnings;
            });
        });

        const table = formatTable({
            EXPECTED_ERRORS,
            errors,
            EXPECTED_WARNINGS,
            warnings
        });
        console.info(formatMessage(
            'STYLELINT', [table.errors.passed, table.warnings.passed], files
        ));

        console.table(table);
    });
}

console.log('Starting tests...');

testESLint();
testStyleLint();


