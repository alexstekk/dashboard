import { classNames } from './classNames';

describe('classNames', () => {
    test('Only one arg', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('All args', () => {
        const expected = 'someClass addClass red';
        expect(
            classNames(
                'someClass',
                { red: true },
                ['addClass'],
            ),
        )
            .toBe(expected);
    });
});
