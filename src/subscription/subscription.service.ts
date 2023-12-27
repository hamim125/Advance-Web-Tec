import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  async getSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  async getSubscriptionById(id: number): Promise<Subscription> {
    const subscription = await this.subscriptionRepository.findOne({where:{id:id}});

    if (!subscription) {
      throw new NotFoundException(`Subscription with ID ${id} not found`);
    }

    return subscription;
  }

  async createSubscription(subscriptionDto: Subscription): Promise<Subscription> {
    const newSubscription = this.subscriptionRepository.create(subscriptionDto);
    return this.subscriptionRepository.save(newSubscription);
  }

  async updateSubscription(id: number, subscriptionDto: Subscription): Promise<Subscription> {
    const subscription = await this.subscriptionRepository.findOne({where:{id:id}});

    if (!subscription) {
      throw new NotFoundException(`Subscription with ID ${id} not found`);
    }

    this.subscriptionRepository.merge(subscription, subscriptionDto);

    return this.subscriptionRepository.save(subscription);
  }

  async deleteSubscription(id: number): Promise<void> {
    const subscription = await this.subscriptionRepository.findOne({where:{id:id}});

    if (!subscription) {
      throw new NotFoundException(`Subscription with ID ${id} not found`);
    }

    await this.subscriptionRepository.remove(subscription);
  }
}
