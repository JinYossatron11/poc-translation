import { environment } from '../../environments/environment';
import { TranslationService } from './translation.service';


describe('TranslationService', () => {
  beforeEach(() => {
  });

  it('should set default language to environment variable', () => {
    const service = new TranslationService();
    const result = service.getLanguage();
    expect(result).toBe(environment.default.language);
  });
});
