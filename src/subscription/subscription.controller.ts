import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get('getAll')
  async getSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionService.getSubscriptions();
  }

  @Get(':id')
  async getSubscriptionById(@Param('id') id: string): Promise<Subscription> {
    const subscriptionId = parseInt(id, 10);
    return this.subscriptionService.getSubscriptionById(subscriptionId);
  }

  @Post('creat')
  async createSubscription(@Body() subscriptionDto: Subscription): Promise<Subscription> {
    return this.subscriptionService.createSubscription(subscriptionDto);
  }

  @Put(':id')
  async updateSubscription(
    @Param('id') id: string,
    @Body() subscriptionDto: Subscription,
  ): Promise<Subscription> {
    const subscriptionId = parseInt(id, 10);
    return this.subscriptionService.updateSubscription(subscriptionId, subscriptionDto);
  }

  @Delete(':id')
  async deleteSubscription(@Param('id') id: string): Promise<void> {
    const subscriptionId = parseInt(id, 10);
    return this.subscriptionService.deleteSubscription(subscriptionId);
  }
}
