import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import fs from "fs";

import { InputData, ExampleInputData } from "~/types/InputType";

async function seed() {
  await Promise.all(
    getDays().map(async (_day) => {
      const { day, title, sourceUrl, inputs } = _day;
      const data = {
        day,
        title,
        sourceUrl,
      };
      const createdDay = await db.day.create({ data });

      inputs.map(async (input, order) => {
        const { type, content, title } = input;
        const data = {
          title,
          type,
          content,
          order,
          dayId: createdDay.id,
        };
        await db.dayInput.create({ data });
      });
    })
  );
}

seed();

function getDays() {
  return [
    {
      day: 1,
      title: "Day One",
      sourceUrl: "https://adventofcode.com/2023/day/1",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day1input.txt`, "utf8"),
        },
        {
          title: "Part one input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day1PartOneExampleInput.txt`,
            "utf8"
          ),
        },
        {
          title: "Part two input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day1PartTwoExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 2,
      title: "Day Two",
      sourceUrl: "https://adventofcode.com/2023/day/2",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day2input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day2ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 3,
      title: "Day Three",
      sourceUrl: "https://adventofcode.com/2023/day/3",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day3input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day3ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 4,
      title: "Day Four",
      sourceUrl: "https://adventofcode.com/2023/day/4",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day4input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day4ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 5,
      title: "Day Five",
      sourceUrl: "https://adventofcode.com/2023/day/5",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day5input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day5ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 6,
      title: "Day Six",
      sourceUrl: "https://adventofcode.com/2023/day/6",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day6input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day6ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 7,
      title: "Day Seven",
      sourceUrl: "https://adventofcode.com/2023/day/7",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day7input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day7ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 8,
      title: "Day Eight",
      sourceUrl: "https://adventofcode.com/2023/day/8",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day8input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day8PartOneExampleInput.txt`,
            "utf8"
          ),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day8PartTwoExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
    {
      day: 9,
      title: "Day Nine",
      sourceUrl: "https://adventofcode.com/2023/day/9",
      inputs: [
        {
          title: "Input data",
          type: InputData,
          content: fs.readFileSync(`./prisma/textData/day9input.txt`, "utf8"),
        },
        {
          title: "Example input data",
          type: ExampleInputData,
          content: fs.readFileSync(
            `./prisma/textData/day9ExampleInput.txt`,
            "utf8"
          ),
        },
      ],
    },
  ];
}
