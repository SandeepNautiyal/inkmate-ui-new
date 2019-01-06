import { ProblemsModule } from './problems.module';

describe('ProblemsModule', () => {
  let problemsModule: ProblemsModule;

  beforeEach(() => {
    problemsModule = new ProblemsModule();
  });

  it('should create an instance', () => {
    expect(problemsModule).toBeTruthy();
  });
});
