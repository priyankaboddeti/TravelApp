const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, NV, USA, for 4 Day and 3 Night for Just Me with a Cheap budget with Flight details, Flight Price with Booking URL, Hotels options with Hotel Name, Hotel Address, Price, hotel image URL, geo-coordinates, rating. Descriptions and Places to visit nearby with Place Name, Place Description, Place Image URL, Geo Coordinates, ticket Pricing. The travel plan for each of the locations for 4 day and 3 night with each day plan with the best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I cannot provide real-time flight and hotel prices or booking URLs.  These change constantly.  I also cannot access and display images directly.  This response will give you the structure of a JSON travel plan, including placeholders you can fill in using your preferred flight and hotel comparison websites (like Kayak, Expedia, Google Flights, etc.).\n\n```json\n{\n  \"tripName\": \"Las Vegas Budget Trip\",\n  \"traveler\": \"Solo Traveler\",\n  \"duration\": \"4 Days, 3 Nights\",\n  \"budget\": \"Cheap\",\n  \"bestTimetoVisit\": \"September - November (excluding holidays) or January - March (excluding major events)\",\n\n\n  \"flights\": {\n    \"outbound\": {\n      \"airline\": \"[Airline Name]\",\n      \"flightNumber\": \"[Flight Number]\",\n      \"departureAirport\": \"[Departure Airport Code]\",\n      \"arrivalAirport\": \"[LAS - McCarran International Airport]\",\n      \"departureTime\": \"[Departure Time]\",\n      \"arrivalTime\": \"[Arrival Time]\",\n      \"price\": \"[Price - Replace with actual price]\",\n      \"bookingURL\": \"[Booking URL - Replace with actual URL]\"\n    },\n    \"return\": {\n      \"airline\": \"[Airline Name]\",\n      \"flightNumber\": \"[Flight Number]\",\n      \"departureAirport\": \"[LAS - McCarran International Airport]\",\n      \"arrivalAirport\": \"[Arrival Airport Code]\",\n      \"departureTime\": \"[Departure Time]\",\n      \"arrivalTime\": \"[Arrival Time]\",\n      \"price\": \"[Price - Replace with actual price]\",\n      \"bookingURL\": \"[Booking URL - Replace with actual URL]\"\n    }\n  },\n\n  \"hotel\": {\n    \"name\": \"[Hotel Name - e.g., Circus Circus]\",\n    \"address\": \"[Hotel Address]\",\n    \"pricePerNight\": \"[Price - Replace with actual price]\",\n    \"image\": \"[Image URL - Replace with actual URL]\",\n    \"geoCoordinates\": \"[Latitude, Longitude]\",\n    \"rating\": \"[Rating - e.g., 3.5]\",\n    \"description\": \"[Hotel Description]\"\n  },\n\n  \"itinerary\": {\n    \"day1\": {\n      \"date\": \"[Date]\",\n      \"activities\": [\n        {\n          \"name\": \"Arrival and Check-in\",\n          \"time\": \"[Time]\",\n          \"description\": \"Arrive at McCarran International Airport (LAS), take the airport shuttle or rideshare to your hotel, check in.\"\n        },\n        {\n          \"name\": \"Explore the Strip (South)\",\n          \"time\": \"[Time]\",\n          \"description\": \"Walk the south end of the Strip, see the Bellagio Fountains, and admire the architecture.  Consider free attractions.\",\n          \"placeImageURL\": \"[Image URL]\",\n          \"geoCoordinates\": \"[Latitude, Longitude]\",\n          \"ticketPrice\": \"Free\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"date\": \"[Date]\",\n      \"activities\": [\n        {\n          \"name\": \"Downtown Las Vegas\",\n          \"time\": \"[Time]\",\n          \"description\": \"Visit Fremont Street Experience (free), explore the vintage casinos, and experience the vibe of old Vegas.\",\n          \"placeImageURL\": \"[Image URL]\",\n          \"geoCoordinates\": \"[Latitude, Longitude]\",\n          \"ticketPrice\": \"Free (unless you purchase food/drinks)\"\n        },\n        {\n          \"name\": \"Neon Museum\",\n          \"time\": \"[Time]\",\n          \"description\": \"See iconic Las Vegas signs. (Check for ticket prices online)\",\n          \"placeImageURL\": \"[Image URL]\",\n          \"geoCoordinates\": \"[Latitude, Longitude]\",\n          \"ticketPrice\": \"[Price - Check online]\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"date\": \"[Date]\",\n      \"activities\": [\n        {\n          \"name\": \"Red Rock Canyon National Conservation Area\",\n          \"time\": \"[Time]\",\n          \"description\": \"Day trip outside the city. Hike, bike, or drive through the scenic red rock formations. (Check entrance fees)\",\n          \"placeImageURL\": \"[Image URL]\",\n          \"geoCoordinates\": \"[Latitude, Longitude]\",\n          \"ticketPrice\": \"[Price - Check online]\"\n        },\n        {\n          \"name\": \"Pool Time/Relaxation\",\n          \"time\": \"[Time]\",\n          \"description\": \"Relax by the pool at your hotel (if available).\"\n        }\n      ]\n    },\n    \"day4\": {\n      \"date\": \"[Date]\",\n      \"activities\": [\n        {\n          \"name\": \"Departure\",\n          \"time\": \"[Time]\",\n          \"description\": \"Check out of hotel, travel to McCarran International Airport (LAS) for your flight home.\"\n        }\n      ]\n    }\n  }\n}\n```\n\nRemember to replace the bracketed placeholders with your actual findings from flight and hotel searches.  Consider using public transportation (buses) within Las Vegas to save money on taxis or rideshares.  Look for deals and discounts on attractions online in advance.  Cheap eats are plentiful; explore local options rather than high-end restaurants.\n"},
          ],
        },
      ],
    });
  
    
  
  
