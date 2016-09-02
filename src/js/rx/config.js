module.exports = {
  glossary: [{
    term: 'Active',
    definition: 'If you have refills, you may request a refill of this prescription from your VA pharmacy.'
  },
  {
    term: 'Discontinued',
    definition: 'This prescription is no longer available. Contact your VA provider if you need more of this medication.'
  },
  {
    term: 'Expired',
    definition: 'Prescription too old. Call your VA healthcare team if you need more.'
  },
  {
    term: 'On hold',
    definition: 'This prescription cannot be refilled until a hold is resolved by the pharmacy. Contact your VA pharmacy if you need this prescription now.'
  },
  {
    term: 'Pending',
    definition: 'Your VA provider ordered this prescription. It may not be ready for pick up at the VA pharmacy window or to be mailed to you. Contact your VA pharmacy if you need this prescription now.'
  },
  {
    term: 'Suspended',
    definition: 'You requested this prescription too early. It will be sent to you before you run out. Contact your VA pharmacy if you need this prescription now.'
  }],
  rxStatuses: {
    active: 'Active',
    discontinued: 'Discontinued',
    expired: 'Expired',
    onHold: 'On hold',
    submitted: 'Pending',
    suspended: 'Suspended',
    refillinprocess: 'Refill in procress',
    unknown: 'Unknown'
  },
  sortOptions: [
    { value: 'prescription-name',
      label: 'Prescription name'
    },
    { value: 'facility-name',
      label: 'Facility name'
    },
    { value: 'last-requested',
      label: 'Last requested'
    }]
};
