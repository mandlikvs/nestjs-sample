import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({
    status: 200,
    description: 'Return all cats',
    type: [String], // Example: return a list of cats
  })
  getAllCats(): string[] {
    return ['Cat 1', 'Cat 2'];
  }
}
