

export default function Category() {

  const categoryList = [
    {
      id: 1,
      name: 'National Security',
      label: 'How can we ensure a sustainable and resilient food supply for our growing population?',
    },
    {
      id: 2,
      name: 'Food And Securiy',
      label: 'How can we ensure a sustainable and resilient food supply for our growing population?',
    },
    {
      id: 1,
      name: 'Health Care',
      label: 'How can we ensure a sustainable and resilient food supply for our growing population?',
    },
    {
      id: 2,
      name: 'E-Commerce',
      label: 'How can we ensure a sustainable and resilient food supply for our growing population?',
    },
    {
      id: 1,
      name: 'Special Education',
      label: 'How can we ensure a sustainable and resilient food supply for our growing population?',
    }
  ]

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 flex flex-col items-center gap-6">
        <div className={`flex flex-col items-center`}>
          <h1 className={`font-bold text-[24px] lg:text-[32px]`}>Categories</h1>
          <p className={`font-normal text-[16px]`}>Pioneering the future future; AI and Robotics Solutions</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {categoryList.map((item, index) => (
            <div key={index} className={`px-8 py-5 rounded-xl ${item.id === 1 ? 'bg-[#F8C748]' :'bg-gradient-to-br from-[#95772B] to-[#666828] text-white'}`}>
              <h2 className="font-medium text-[20px] mb-2">{ item.name }</h2>
              <p className="font-normal ">{ item.label }</p>
            </div>
          ))}
        </section>

        {/* <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="px-7 py-4 rounded-xl bg-[#F8C748]">
            <h2>AI Solutions</h2>
            <p>How can we ensure a sustainable and resilient food supply for our growing population?</p>
          </div>

          <div className="bg-gradient-to-br from-[#95772B] to-[#666828]">
            <h2>Food and security</h2>
            <p>How can we ensure a sustainable and resilient food supply for our growing population?</p>
          </div>

          <div className="bg-[#F8C748]">
            <h2>Food and security</h2>
            <p>How can we ensure a sustainable and resilient food supply for our growing population?</p>
          </div>

          <div className="bg-gradient-to-br from-[#95772B] to-[#666828]">
            <h2>Food and security</h2>
            <p>How can we ensure a sustainable and resilient food supply for our growing population?</p>
          </div>

          <div className="bg-[#F8C748]">
            <h2>Food and security</h2>
            <p>How can we ensure a sustainable and resilient food supply for our growing population?</p>
          </div>
        </div> */}
      </section>
    </>
  )
}