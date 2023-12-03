import { hasLength, isEmail, matches } from "@mantine/form";
import { all, create } from "mathjs";



const math = create(all);

math.import({
  hasLength: hasLength,
  matches: matches,
  isEmail: function (value: any, message: any) {
    return isEmail(message)(value);
  },
  length: (value: any) => value.length,
});


export default math