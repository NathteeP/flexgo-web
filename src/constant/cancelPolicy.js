const cancelPolicy = {
  FLEXIBLE:
    'Guests can cancel up to 24 hours before check-in for a full refund, and you won’t be paid. If they cancel less than 24 hours before check-in and never check in, you’ll be paid for the first night. If they cancel after check-in, you’ll be paid for each night they stay, plus 1 additional night.',
  MODERATE:
    'Guests can cancel up to 5 days before check-in for a full refund, and you won’t be paid. If they cancel after that, you’ll be paid for each night they stay, plus 1 additional night and 50% for all unspent nights.',
  STRICT:
    'To receive a full refund, guests must cancel within 48 hours of booking, and the cancellation must occur at least 14 days before check-in. If they cancel between 7 and 14 days before check-in, you’ll be paid 50% for all nights. If they cancel after that, you’ll be paid 100% for all nights.',
};

export default cancelPolicy;
