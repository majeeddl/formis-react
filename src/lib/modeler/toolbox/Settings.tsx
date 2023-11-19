import { Grid, Switch, TextInput } from "@mantine/core";
import { hasLength, matches, useForm, isEmail } from "@mantine/form";
import React, { useEffect, useState } from "react";
// import * as math from "mathjs";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import math from "../../lib/math.lib";
import { useFormisItems, useFormisItemsDispatch } from "../../context/formis.items.context";

const Settings = () => {
  const [size, setSize] = useState("xs");

  const items = useFormisItems();
  const selected = items.find((i: any) => i.selected);
  const itemDispatch = useFormisItemsDispatch();

  // console.log();
  // var x = math.compile(`hasLength({ min: 3, max: 20 }, "it is not correct")`);
  const x = math.compile(`isEmail(value,'Invalid email')`);

  // console.log(x.evaluate({ value: "majeed.dl@gmail.c" }));

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: "firstname",
      label: "firstname",
      description: "",
      placeholder: "",
      required: false,
      disabled: false,
      // validate: (value: any) => console.log(value),
    },
    validate: {
      name: (value: any, values: any) => {
        // console.log(value);
        // var result = math.evaluate(`compareText("${value}", "firstname")`);
        // console.log(result);
        // return !result ? null : "Name must be between 3 and 20 characters";

        const x = math.compile(`isEmail(value,'Invalid email')`);
        return x.evaluate({ value: value });
      },
    },
  });

  // console.log(form)

  const changeSettings = (e: any) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  useEffect(() => {
    // console.log(JSON.stringify(form.values));
  }, [form.values]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  useEffect(() => {}, []);
  return (
    <>
      <form onChange={changeSettings}>
        <TextInput label="Name" name="name" {...form.getInputProps("name")} size={size} withAsterisk></TextInput>
        <TextInput label="Label" {...form.getInputProps("label")} size={size}></TextInput>
        <TextInput label="Description" {...form.getInputProps("description")} size={size}></TextInput>
        <TextInput label="Placeholder" {...form.getInputProps("placeholder")} size={size}></TextInput>
        <Grid>
          <Grid.Col span={6} mt={"xs"}>
            <Switch label="Required" {...form.getInputProps("required")} size={size}></Switch>
          </Grid.Col>
          <Grid.Col span={6} mt={"xs"}>
            <Switch label="Disabled" {...form.getInputProps("disabled")} size={size}></Switch>
          </Grid.Col>
          <Grid.Col>
            <div style={{ height: 300 }}>
              <Editor
                beforeMount={(monaco) => {
                  // console.log(editor);
                  // console.log(monaco);

                  function createDependencyProposals(range) {
                    return [
                      {
                        label: "isEmail",
                        kind: monaco.languages.CompletionItemKind.Function,
                        documentation: "The Lodash library exported as Node.js modules.",
                        insertText: "isEmail(value,'Invalid email')",
                        range: range,
                      },
                      {
                        label: "hasLength",
                        kind: monaco.languages.CompletionItemKind.Function,
                        documentation: "The Lodash library exported as Node.js modules.",
                        insertText: "hasLength(value,{ min: 3, max: 20 }, 'Name must be between 3 and 20 characters')",
                        range: range,
                      },
                    ];
                  }

                  monaco.languages.registerCompletionItemProvider("javascript", {
                    provideCompletionItems: function (model, position) {
                      // find out if we are completing a property in the 'dependencies' object.
                      // var textUntilPosition = model.getValueInRange({
                      //   startLineNumber: 1,
                      //   startColumn: 1,
                      //   endLineNumber: position.lineNumber,
                      //   endColumn: position.column,
                      // });

                      // console.log(textUntilPosition);
                      // var match = textUntilPosition.match(
                      //   /"dependencies"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/
                      // );
                      // console.log(match);
                      // if (!match) {
                      //   return { suggestions: [] };
                      // }
                      var word = model.getWordUntilPosition(position);
                      var range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn,
                      };
                      return {
                        suggestions: createDependencyProposals(range),
                      };
                    },
                  });

                  // monaco.languages.registerCompletionItemProvider("javascript", {
                  //   provideCompletionItems: () => {
                  //     return [
                  //       {
                  //         label: "majeed",
                  //         kind: monaco.languages.CompletionItemKind.Snippet,
                  //         documentation: "Iterate over an Array",
                  //         insertText: ["for(let i=0; i < arr.length; i++){", "\tlet elem = arr[i];", "", "}"].join(
                  //           "\n"
                  //         ),
                  //       },
                  //     ];
                  //   },
                  // });
                }}
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue=""
                options={{
                  minimap: {
                    enabled: false,
                  },
                }}
              />
              ;
            </div>
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
};

export default Settings;
