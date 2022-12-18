import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

// Banco de dados em memória

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notifications).toHaveLength(1);
  });
});
