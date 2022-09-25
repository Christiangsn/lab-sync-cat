import { Module } from '@nestjs/common';
import { PrismaService } from './gateways/prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class InfraModule {}
