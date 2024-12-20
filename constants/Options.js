export const SelectTravellerList = [
    {
      id:1,
      title: "Just Me",
      desc: "A sole traveler in exploration",
      icon: '🧍',  // replace with actual icon or path if available
      people: 1
    },
    {
      id:2,
      title: "A Couple",
      desc: "Perfect for you and your partner",
      icon: '🥂',  // replace with actual icon or path if available
      people: 2
    },
    {
      id:3,
      title: "Family",
      desc: "Bring the whole family for an adventure!",
      icon: '🏡',  // Home icon for Family
      people: 4
    },
    {
      id:4,
      title: "Friends",
      desc: "Travel with a group of friends",
      icon: '👫',  // Icon for a group of friends
      people: 3 // can adjust depending on group size
    }
  ];

  export const SelectBudgetOptions = [
    {
      id: 1,
      title: "Cheap",
      desc: "Stay conscious of costs",
      icon: '💸'  // Icon for budget-friendly option
    },
    {
      id: 2,
      title: "Moderate",
      desc: "Balanced cost and comfort",
      icon: '💰'  // Icon representing moderate spending
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Experience premium amenities",
      icon: '💎'  // Icon symbolizing luxury
    }
  ];
  
  export const AIprompt="Generate Travel Plan for Location: {location}, for {totalDays} Day and {totalNights} Night for {traveller} with a {budget} budget with Flight details, Flight Price with Booking URL, Hotels options with Hotel Name, Hotel Address, Price, hotel image URL, geo-coordinates, rating. Descriptions and Places to visit nearby with Place Name, Place Description, Place Image URL, Geo Coordinates, ticket Pricing. The travel plan for each of the locations for {totalDays} day and {totalNights} night with each day plan with the best time to visit in JSON format."
  