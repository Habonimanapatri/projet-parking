import { expect, test } from "bun:test";

import { toSlug } from '../src/utils/toSlug';

test('should generate correct slug', () => {
    expect(toSlug('Je suis un exemple')).toBe('je-suis-un-exemple');
});