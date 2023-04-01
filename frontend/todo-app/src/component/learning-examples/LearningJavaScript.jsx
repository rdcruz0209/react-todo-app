const person = {
  name: 'Robert',
  role: 'Java Developer',
  address: {
    line1: 'Block 10 Lot 25',
    line2: 'Florenceville Brgy. Tagapo',
    city: 'Sta. Rosa',
    province: 'Laguna',
    country: 'Philippines',
  },

  profiles: ['twitter', 'linkedin', 'instagram'],

  printProfile: () => {
    // eslint-disable-next-line array-callback-return
    person.profiles.map((profiles) => {
      // eslint-disable-next-line no-console
      console.log(profiles)
    })
    // eslint-disable-next-line no-console
    console.log(person.profiles[0])
  },
}

export default function LearningJavaScript() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.role}</div>
      <div>{person.address.line1}</div>
      <div>{person.address.line2}</div>
      <div>{person.address.city}</div>
      <div>{person.address.province}</div>
      <div>{person.address.country}</div>
      <div>{person.profiles[1]}</div>
      <div>{person.printProfile()}</div>
    </>
  )
}
