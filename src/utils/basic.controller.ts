import { Delete, Get, Param, Patch } from '@nestjs/common';
import { BasicService } from './basic.service';
import { ApiOperation } from '@nestjs/swagger';

export class BasicController {
  constructor(private service: BasicService) {}

  @Get()
  @ApiOperation({ summary: 'Returns an array of active entities' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns one entity data' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft-delete the entity (setting current timestamp to deleted_at)' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Patch('restore/:id')
  @ApiOperation({ summary: 'Restore the entity (setting null to deleted_at)' })
  restore(@Param('id') id: string) {
    return this.service.restore(+id);
  }
}
