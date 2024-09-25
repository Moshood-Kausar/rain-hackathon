

export default function Category() {

  const categoryList = [
    {
      id: 1,
      name: 'Food Security',
      label: 'How can we leverage technology to ensure a sustainable and resilient food supply for Africa’s growing population?',
    },
    {
      id: 2,
      name: 'National Security',
      label: 'What AI and Robotics innovations can enhance national safety and security in an increasingly complex world?',
    },
    {
      id: 3,
      name: 'Healthcare',
      label: 'How can technology revolutionize healthcare systems to improve accessibility and patient outcomes?',
    },
    {
      id: 4,
      name: 'E-Commerce',
      label: 'How can we leverage AI and Robotics to create smarter, more efficient e-commerce solutions?',
    },
    {
      id: 5,
      name: 'Special Education',
      label: 'How can we develop tools to empower and enhance the learning experience for students with special needs?',
    },
  ]

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 flex flex-col items-center gap-6">
        <div className={`flex flex-col items-center`}>
          <h1 className={`font-medium text-[18px] lg:text-[32px]`}>Categories</h1>
          <p className={`text-xs md:text-[16px] text-center text-dark`}>Pioneering the future future; AI and Robotics Solutions</p>
        </div>
        {/* An important note, for semantic html, section is not suppose to be inside another section, you want to use div for the below division/section  */}
        <section className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {categoryList.map((item, index) => (
            <div key={index} className={`px-5 py-3 rounded-md max-w-[420px] ${item.id % 2 === 1 ? 'bg-[#F8C748]' :'bg-gradient-to-br from-[#95772B] to-[#666828] text-white'}`}>
              <h2 className="font-medium text-[16px] md:text-[20px] mb-1">{ item.name }</h2>
              <p className="text-xs">{ item.label }</p>
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