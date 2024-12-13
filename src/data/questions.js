// Add shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle questions and options while maintaining answer correlation
export const questions = {
  AFC: shuffleArray([
    {
      question: "Which AFC tight end is dating pop-star Taylor Swift?",
      options: shuffleArray(["Dalton Kincaid", "Travis Kelce", "Mike Gesicki", "Mark Andrews"]),
      answer: "Travis Kelce"
    },
    {
      question: "Which AFC team has won the most Super Bowls?",
      options: shuffleArray(["New England Patriots", "Pittsburgh Steelers", "Denver Broncos", "Las Vegas Raiders"]),
      answer: "New England Patriots"
    },
    {
      question: "Who is the current quarterback for the Kansas City Chiefs?",
      options: shuffleArray(["Patrick Mahomes", "Josh Allen", "Joe Burrow", "Justin Herbert"]),
      answer: "Patrick Mahomes"
    },
    {
      question: "Which AFC team plays their home games at Gillette Stadium?",
      options: shuffleArray(["New England Patriots", "New York Jets", "Buffalo Bills", "Miami Dolphins"]),
      answer: "New England Patriots"
    },
    {
      question: "What year did the Cleveland Browns return to the NFL?",
      options: shuffleArray(["1999", "2000", "1995", "1997"]),
      answer: "1999"
    },
    {
      question: "Which AFC team has never appeared in a Super Bowl?",
      options: shuffleArray(["Cleveland Browns", "Cincinnati Bengals", "Jacksonville Jaguars", "Houston Texans"]),
      answer: "Cleveland Browns"
    },
    {
      question: "Who holds the record for most passing yards in a single season for an AFC quarterback?",
      options: shuffleArray(["Peyton Manning", "Dan Marino", "Tom Brady", "Patrick Mahomes"]),
      answer: "Peyton Manning"
    },
    {
      question: "Which AFC team relocated from San Diego to Los Angeles?",
      options: shuffleArray(["Chargers", "Raiders", "Chiefs", "Broncos"]),
      answer: "Chargers"
    },
    {
      question: "What AFC team drafted Trevor Lawrence first overall in 2021?",
      options: shuffleArray(["Jacksonville Jaguars", "New York Jets", "Houston Texans", "Cincinnati Bengals"]),
      answer: "Jacksonville Jaguars"
    },
    {
      question: "Which AFC team won Super Bowl LVIII (2024)?",
      options: shuffleArray(["Kansas City Chiefs", "Baltimore Ravens", "Buffalo Bills", "Cincinnati Bengals"]),
      answer: "Kansas City Chiefs"
    },
    {
      question: "Who is the head coach of the Baltimore Ravens?",
      options: shuffleArray(["John Harbaugh", "Mike Tomlin", "Sean McDermott", "Mike Vrabel"]),
      answer: "John Harbaugh"
    },
    {
      question: "Which AFC team plays their home games at Acrisure Stadium?",
      options: shuffleArray(["Pittsburgh Steelers", "Cleveland Browns", "Cincinnati Bengals", "Tennessee Titans"]),
      answer: "Pittsburgh Steelers"
    },
    {
      question: "Who won the 2023 AFC MVP?",
      options: shuffleArray(["Lamar Jackson", "Josh Allen", "Patrick Mahomes", "Tua Tagovailoa"]),
      answer: "Lamar Jackson"
    },
    {
      question: "Which AFC team has the longest active playoff drought?",
      options: shuffleArray(["New York Jets", "Las Vegas Raiders", "Denver Broncos", "Tennessee Titans"]),
      answer: "New York Jets"
    },
    {
      question: "What AFC South team drafted C.J. Stroud in 2023?",
      options: shuffleArray(["Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans"]),
      answer: "Houston Texans"
    }
  ]),
  NFC: shuffleArray([
    {
      question: "Which NFC team plays at Levi's Stadium?",
      options: shuffleArray(["San Francisco 49ers", "Seattle Seahawks", "Arizona Cardinals", "Los Angeles Rams"]),
      answer: "San Francisco 49ers"
    },
    {
      question: "Which NFC team has the most Super Bowl appearances?",
      options: shuffleArray(["Dallas Cowboys", "San Francisco 49ers", "Green Bay Packers", "Chicago Bears"]),
      answer: "Dallas Cowboys"
    },
    {
      question: "Who is the starting quarterback for the Detroit Lions?",
      options: shuffleArray(["Jared Goff", "Kirk Cousins", "Baker Mayfield", "Sam Howell"]),
      answer: "Jared Goff"
    },
    {
      question: "Which NFC team plays their home games at U.S. Bank Stadium?",
      options: shuffleArray(["Minnesota Vikings", "Detroit Lions", "Chicago Bears", "Green Bay Packers"]),
      answer: "Minnesota Vikings"
    },
    {
      question: "Who is the head coach of the San Francisco 49ers?",
      options: shuffleArray(["Kyle Shanahan", "Sean McVay", "Dan Campbell", "Matt LaFleur"]),
      answer: "Kyle Shanahan"
    },
    {
      question: "Which NFC team won Super Bowl LVII (2023)?",
      options: shuffleArray(["Philadelphia Eagles", "San Francisco 49ers", "Dallas Cowboys", "Tampa Bay Buccaneers"]),
      answer: "Philadelphia Eagles"
    },
    {
      question: "What NFC team drafted Bijan Robinson in 2023?",
      options: shuffleArray(["Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers"]),
      answer: "Atlanta Falcons"
    },
    {
      question: "Which NFC team plays at Lambeau Field?",
      options: shuffleArray(["Green Bay Packers", "Chicago Bears", "Detroit Lions", "Minnesota Vikings"]),
      answer: "Green Bay Packers"
    },
    {
      question: "Who won the 2023 NFC Championship Game?",
      options: shuffleArray(["San Francisco 49ers", "Detroit Lions", "Dallas Cowboys", "Philadelphia Eagles"]),
      answer: "San Francisco 49ers"
    },
    {
      question: "Which NFC team relocated from St. Louis to Los Angeles?",
      options: shuffleArray(["Rams", "Cardinals", "Vikings", "Lions"]),
      answer: "Rams"
    },
    {
      question: "Who is the all-time passing leader for the New Orleans Saints?",
      options: shuffleArray(["Drew Brees", "Archie Manning", "Aaron Brooks", "Bobby Hebert"]),
      answer: "Drew Brees"
    },
    {
      question: "Which NFC team plays their home games at Lincoln Financial Field?",
      options: shuffleArray(["Philadelphia Eagles", "New York Giants", "Washington Commanders", "Dallas Cowboys"]),
      answer: "Philadelphia Eagles"
    },
    {
      question: "What year did the Tampa Bay Buccaneers join the NFL?",
      options: shuffleArray(["1976", "1980", "1972", "1969"]),
      answer: "1976"
    },
    {
      question: "Who is the current owner of the Dallas Cowboys?",
      options: shuffleArray(["Jerry Jones", "Robert Kraft", "Arthur Blank", "Virginia McCaskey"]),
      answer: "Jerry Jones"
    },
    {
      question: "Which NFC team drafted Bryce Young first overall in 2023?",
      options: shuffleArray(["Carolina Panthers", "Atlanta Falcons", "Chicago Bears", "Arizona Cardinals"]),
      answer: "Carolina Panthers"
    }
  ]),
  default: shuffleArray([
    {
      question: "Which NFL team has won the most Super Bowls?",
      options: shuffleArray(["New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers", "Green Bay Packers"]),
      answer: "New England Patriots"
    },
    {
      question: "Who holds the NFL record for most career passing touchdowns?",
      options: shuffleArray(["Tom Brady", "Peyton Manning", "Drew Brees", "Aaron Rodgers"]),
      answer: "Tom Brady"
    },
    {
      question: "Which NFL stadium is known as 'Jerry World'?",
      options: shuffleArray(["AT&T Stadium", "SoFi Stadium", "Allegiant Stadium", "Mercedes-Benz Stadium"]),
      answer: "AT&T Stadium"
    },
    {
      question: "What team won the first Super Bowl?",
      options: shuffleArray(["Green Bay Packers", "Kansas City Chiefs", "New York Jets", "Baltimore Colts"]),
      answer: "Green Bay Packers"
    },
    {
      question: "Who holds the record for most rushing yards in NFL history?",
      options: shuffleArray(["Emmitt Smith", "Walter Payton", "Barry Sanders", "Adrian Peterson"]),
      answer: "Emmitt Smith"
    },
    {
      question: "What year was the NFL founded?",
      options: shuffleArray(["1920", "1925", "1915", "1930"]),
      answer: "1920"
    },
    {
      question: "Which NFL team's fans are known as the '12th Man'?",
      options: shuffleArray(["Seattle Seahawks", "Green Bay Packers", "Buffalo Bills", "Kansas City Chiefs"]),
      answer: "Seattle Seahawks"
    },
    {
      question: "Who holds the record for most receptions in a single season?",
      options: shuffleArray(["Justin Jefferson", "Michael Thomas", "Marvin Harrison", "Cooper Kupp"]),
      answer: "Michael Thomas"
    },
    {
      question: "What is the name of the NFL's championship trophy?",
      options: shuffleArray(["Vince Lombardi Trophy", "Super Bowl Trophy", "NFL Championship Trophy", "George Halas Trophy"]),
      answer: "Vince Lombardi Trophy"
    },
    {
      question: "Which city has hosted the most Super Bowls?",
      options: shuffleArray(["Miami", "New Orleans", "Los Angeles", "Tampa"]),
      answer: "Miami"
    }
  ])
};