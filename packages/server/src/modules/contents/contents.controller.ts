import { Controller } from '@nestjs/common';
import { ContentsService } from './contents.service';

@Controller('contents')
export class ContentsController {
    constructor(private readonly contentsService: ContentsService) {}
}
