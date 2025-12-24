import { Test, TestingModule } from '@nestjs/testing';
import { GuestbookService } from './guestbook.service';

describe('GuestbookService', () => {
  let service: GuestbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestbookService],
    }).compile();

    service = module.get<GuestbookService>(GuestbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
