import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePageDto {
  @ApiProperty({
    description: 'id',
    example: 1
  })
  @IsNotEmpty()
  id: number
}
