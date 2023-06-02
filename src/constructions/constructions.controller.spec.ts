import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionsController } from './constructions.controller';
import { ConstructionsService } from './constructions.service';

describe('ConstructionsController', () => {
  let controller: ConstructionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstructionsController],
      providers: [ConstructionsService],
    }).compile();

    controller = module.get<ConstructionsController>(ConstructionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
