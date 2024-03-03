import { json, type ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { PrismaClient } from "@prisma/client";

import { assertIsDefined } from "~/utils/asserts";
// import { InputDataProps } from "~/components/UI/NewInputModal/useInputQuery";

const db = new PrismaClient();

export const action = async ({ request }: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST": {
      /* handle "POST" */
      break;
    }
    case "PUT": {
      const formData = await request.formData();

      // TODO: Clean this shti up
      const title = formData.get("title") as string;
      const content = formData.get("content") as string;
      const dayString = formData.get("day") as string;
      const type = formData.get("type") as string;

      assertIsDefined(dayString, "day is required");
      assertIsDefined(content, "content is required");
      assertIsDefined(title, "title is required");
      assertIsDefined(type, "type is required");

      // Get day by day number
      const day = await db.day.findFirst({
        where: {
          day: parseInt(dayString),
        },
      });

      assertIsDefined(day, "day not found");

      const inputCount = await db.dayInput.count({
        where: {
          dayId: day.id,
        },
      });

      // use dayId to create new input
      const createdInput = await db.dayInput.create({
        data: {
          title,
          content,
          dayId: day.id,
          type,
          order: inputCount + 1,
        },
      });

      return json({ response: createdInput }, 200);
      break;
    }
    case "PATCH": {
      /* handle "PATCH" */
      break;
    }
    case "DELETE": {
      /* handle "DELETE" */
      break;
    }
  }
};
