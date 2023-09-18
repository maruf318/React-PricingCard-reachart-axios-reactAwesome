import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Fitness classes (limited)",
        "No personal trainer",
        "Free towel service",
        "Discounts on supplements",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "No personal trainer",
        "Free towel service",
        "Discounts on supplements",
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Personal trainer (2 sessions/month)",
        "Sauna and spa access",
        "Free towel service",
        "Discounts on supplements",
      ],
      price: 80.0,
    },
    {
      id: 4,
      name: "Platinum Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Personal trainer (4 sessions/month)",
        "Sauna and spa access",
        "Nutrition consultation",
        "Free towel service",
        "Discounts on supplements",
      ],
      price: 120.0,
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
