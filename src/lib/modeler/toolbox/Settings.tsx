import { Accordion, Grid, Switch, Tabs, TextInput } from "@mantine/core";
import { hasLength, matches, useForm, isEmail } from "@mantine/form";
import React, { useEffect, useState } from "react";
// import * as math from "mathjs";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import math from "../../lib/math.lib";
import { useFormisContext, useFormisDispatchContext } from "../../context/formis.context";
import Basic from "./settings/Basic";
import Datasource from "./settings/Datasource";

const Settings = () => {
  const [size, setSize] = useState("xs");

  const { items, selectedItem } = useFormisContext();

  const { dispatchItems } = useFormisDispatchContext();

  // console.log();
  // var x = math.compile(`hasLength({ min: 3, max: 20 }, "it is not correct")`);
  const x = math.compile(`isEmail(value,'Invalid email')`);

  // console.log(x.evaluate({ value: "majeed.dl@gmail.c" }));

  const form = useForm({
    clearInputErrorOnChange: false,
    validateInputOnChange: true,
    // validateInputOnBlur: true,
    initialValues: {
      name: "",
      label: "",
      description: "",
      placeholder: "",
      required: false,
      disabled: false,
      // validate: (value: any) => console.log(value),
    },
    validate: {
      // name: (value: any, values: any) => {
      //   // console.log(value);
      //   // var result = math.evaluate(`compareText("${value}", "firstname")`);
      //   // console.log(result);
      //   // return !result ? null : "Name must be between 3 and 20 characters";
      //   const x = math.compile(`isEmail(value,'Invalid email')`);
      //   return x.evaluate({ value: value });
      // },
      name: matches(/^(?!^[0-9])[\w$]{2,}$/, "Name must be lowercase and start with a letter and without space"),
    },
  });

  // console.log(form)

  // const checkValidations = (values) => {};

  const changeSettings = (e: any) => {
    // e.preventDefault();
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);

    const { checked, value, type, name } = e.target;

    const _value = name == "required" || name == "disabled" ? checked : value;

    form.setValues({
      [name]: _value,
    });

    // form.setFieldError("label", "salam");

    // form.setErrors({ label: "Too short", email: "Invalid email" });

    dispatchItems({
      type: "update",
      payload: {
        id: selectedItem.id,
        [name]: _value,
      },
    });

    // form.validate();

    // console.log(form.errors);
  };

  useEffect(() => {
    // console.log(JSON.stringify(form.values));
    // form.setErrors({ label: "Too short", email: "Invalid email" });

    console.log(form.errors);
    // console.log(form.isValid());

    const {} = form.values;
  }, [form.values, form.errors]);

  useEffect(() => {
    console.log(selectedItem);

    if (selectedItem?.id) {
      form.setValues({
        name: selectedItem.name,
        label: selectedItem.label || "label",
        description: selectedItem.description || "",
        placeholder: selectedItem.placeholder || "",
        required: selectedItem.required || false,
        disabled: selectedItem.disabled || false,
      });
    }
  }, [selectedItem?.id]);

  return (
    <>
      <form>
        {/* <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="basic">Basic</Tabs.Tab>
            <Tabs.Tab value="properties">Properties</Tabs.Tab>
            <Tabs.Tab value="datasource">Datasource</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="basic">
           
          </Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs> */}
        <Accordion defaultValue="datasource" variant="contained" radius="xs">
          <Accordion.Item value="basic">
            <Accordion.Control fz="xs" icon={<></>}>
              Basic
            </Accordion.Control>
            <Accordion.Panel>
              <Basic form={form} size={size} selectedItem={selectedItem} changeSettings={changeSettings}></Basic>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="validation">
            <Accordion.Control fz={"xs"} icon={<></>}>
              Validation
            </Accordion.Control>
            <Accordion.Panel>
              <div style={{ height: 300 }}>
                <Editor
                  beforeMount={(monaco) => {
                    function createDependencyProposals(range: any) {
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
                          insertText:
                            "hasLength(value,{ min: 3, max: 20 }, 'Name must be between 3 and 20 characters')",
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
              </div>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="datasource">
            <Accordion.Control fz={"xs"} icon={<></>}>
              Datasource
            </Accordion.Control>
            <Accordion.Panel>
              <Datasource></Datasource>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        {/* <Grid.Col>
            <div style={{ height: 300 }}>
              <Editor
                beforeMount={(monaco) => {
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
          </Grid.Col> */}
      </form>
    </>
  );
};

export default Settings;
