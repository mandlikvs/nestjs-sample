// src/cats/dto/create-cat.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()  // Add metadata for Swagger UI
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
