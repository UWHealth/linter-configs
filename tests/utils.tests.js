const chalk = require('chalk');
const symbols = require('log-symbols');
const path = require('path');

function getRelative(filePath) {
    return path.relative(path.resolve(__dirname, '../') + '/', filePath);
}

function formatMessage(tester, tests, files) {
    let color = 'green';
    let message = ['\n', symbols.success, tester + ' TEST RESULTS:', 'PASSED'];

    tests.forEach((test) => {
        if (!test) {
            color = 'red';
            message[1] = symbols.error;
            message[3] = 'FAILED';
        }
    });

    message.push(chalk.reset('\n   Files:', files, '\n'));

    return (
        '\n' +
        chalk.white('\n─────────────────────────────────────────\n') +
        chalk[color].bold(...message)
    );
}

function formatTable({
    EXPECTED_ERRORS = 0,
    errors = 0,
    EXPECTED_WARNINGS = 0,
    warnings = 0,
}) {
    return {
        errors: {
            expected: EXPECTED_ERRORS,
            actual: errors,
            passed: EXPECTED_ERRORS === errors,
        },
        warnings: {
            expected: EXPECTED_WARNINGS,
            actual: warnings,
            passed: EXPECTED_WARNINGS === warnings,
        },
    };
}

module.exports = {
    formatTable,
    formatMessage,
    getRelative,
};
