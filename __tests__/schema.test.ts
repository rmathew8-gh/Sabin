import { schema } from "~/graphql/schema"; // Adjust the import path as needed
import { printSchema } from "graphql";

describe("Schema", () => {
  test("schema is defined", () => {
    expect(schema).toBeDefined();
  });

  test("schema is an object", () => {
    expect(typeof schema).toBe("object");
  });

  test("schema is not null", () => {
    expect(schema).not.toBeNull();
  });

  test("show schema is empty", () => {
    console.log(printSchema(schema));
    // expect(Object.keys(schema).length).toBe(0);
  });
});
