import {Template} from '@coge/generator';
import AppTemplate = require('../app');

describe('lerna-esm/app', () => {
  it('should be a template', () => {
    expect(new AppTemplate({})).toBeInstanceOf(Template);
  });
});
