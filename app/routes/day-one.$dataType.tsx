import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";
import { mapDataToDayResponse } from "~/utils/mapDataToDayResponse";
import { assertIsDefined } from "~/utils/asserts";

import { DayOne } from "~/components/days/DayOne/DayOne";
import { asDayInputType } from "~/types/DayInput";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const day = await db.day.findUnique({
        where: { day: 1 },
    });
    assertIsDefined(day);

    const content = await db.dayInput.findFirst({
        where: {
            dayId: day.id,
            type: params.dataType,
        }
    });

    assertIsDefined(content);
    const enhancedContent = {
        ...content,
        type: asDayInputType(content.type),
    };
    const response = mapDataToDayResponse(day, enhancedContent);

    return json({ data: response })
};

export default function DayOneDataTypeRoute() {
    const { data } = useLoaderData<typeof loader>();
    return <DayOne {...data} />;
}