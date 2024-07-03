const HOUSE_RULES = [
    {
      title: 'Check-in',
      content: [
        'From 15:00 to 00:00',
        'Guests are required to show a photo identification and credit card upon check-in',
        "You'll need to let the property know in advance what time you'll arrive.",
      ],
    },
    {
      title: 'Check-out',
      content: ['Available 24 hours'],
    },
    {
      title: 'Cancellation/prepayment',
      content: [
        'Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.',
      ],
    },
    {
      title: 'Pets',
      content: ['Pets are not allowed.'],
    },
    {
      title: 'No age restriction',
      content: ['There is no age requirement for check-in'],
    },
  ]

export default function HouseRulesBlock () {
    return (
            <div className='p-4 bg-gray-100 rounded mb-4'>
              {HOUSE_RULES.map((rule, index) => (
                <div key={index}>
                  <p>
                    <strong>{rule.title}</strong>
                  </p>
                  {rule.content.map((line, idx) => (
                    <p key={idx} className='text-fg-text-black'>
                      {line}
                    </p>
                  ))}
                  {index !== HOUSE_RULES.length - 1 && <br />}
                </div>
              ))}
            </div>
    )
}