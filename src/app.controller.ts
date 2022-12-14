/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { PrismaService } from './prisma.service';
import {randomUUID} from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
 async create(@Body() body: CreateNotificationBody) {
    console.log(body)

    // await this.prisma.notification.create({
    //   data:{
    //     id: randomUUID(),
    //     content: 'Você recebeu uma nova solicitação de amizade!',
    //     category: 'social',
    //     recipientId: randomUUID()
    //   }
    // })
  }
}