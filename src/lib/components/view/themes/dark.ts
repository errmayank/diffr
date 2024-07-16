import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export const dark = EditorView.theme(
	{
		"&": {
			color: "hsl(var(--foreground))",
			backgroundColor: "hsl(var(--card))",
		},
		".cm-content": {
			caretColor: "hsl(var(--foreground))",
			fontFamily: "monospace",
			padding: "0px",
			paddingTop: "0.5rem",
			paddingBottom: "0.5rem",
		},
		"&.cm-focused .cm-cursor": {
			borderLeftColor: "#c6c6c6",
		},
		"&.cm-focused .cm-selectionBackground, ::selection": {
			backgroundColor: "rgba(110, 152, 229, 0.35)",
		},
		".cm-selectionMatch": {
			backgroundColor: "rgba(114, 161, 255, 0.35)",
		},
		".cm-line": {
			backgroundColor: "hsl(var(--card))",
		},
		".cm-activeLine": {
			boxShadow: "inset 0px 0px 400px 110px rgba(0, 0, 0, 0.12)",
		},
		".cm-gutters": {
			backgroundColor: "hsl(var(--accent))",
			color: "hsl(var(--muted-foreground))",
			border: "none",
			cursor: "default",
		},
		".cm-activeLineGutter": {
			color: "hsl(var(--foreground))",
			backgroundColor: "transparent",
		},
		".cm-changedLine:has(.cm-deletedLine)": { backgroundColor: "rgb(236 79 32 / 15%)" },
		".cm-changedLine:has(.cm-insertedLine)": { backgroundColor: "rgb(1 129 102 / 15%)" },
		".cm-deletedLine > .cm-changedText": {
			background: "none",
			backgroundColor: "rgb(236 79 32 / 35%)",
			borderRadius: "2px",
		},
		".cm-insertedLine > .cm-changedText": {
			background: "none",
			backgroundColor: "rgb(1 129 102 / 35%)",
			borderRadius: "2px",
		},
		".cm-content, .cm-gutter": {
			minHeight: "calc(100dvh - 2.25rem - 1.75rem)",
		},
		".cm-scroller": { overflow: "auto" },
	},
	{ dark: true },
);

const myHighlightStyle = HighlightStyle.define([
	{
		tag: [
			tags.keyword,
			tags.operatorKeyword,
			tags.modifier,
			tags.color,
			tags.constant(tags.name),
			tags.standard(tags.name),
			tags.standard(tags.tagName),
			tags.special(tags.brace),
			tags.atom,
			tags.bool,
			tags.special(tags.variableName),
		],
		color: "#569cd6",
	},
	{ tag: [tags.controlKeyword, tags.moduleKeyword], color: "#c586c0" },
	{
		tag: [
			tags.name,
			tags.deleted,
			tags.character,
			tags.macroName,
			tags.propertyName,
			tags.variableName,
			tags.labelName,
			tags.definition(tags.name),
		],
		color: "#9cdcfe",
	},
	{ tag: tags.heading, fontWeight: "bold", color: "#9cdcfe" },
	{
		tag: [
			tags.typeName,
			tags.className,
			tags.tagName,
			tags.number,
			tags.changed,
			tags.annotation,
			tags.self,
			tags.namespace,
		],
		color: "#4ec9b0",
	},
	{ tag: [tags.function(tags.variableName), tags.function(tags.propertyName)], color: "#dcdcaa" },
	{ tag: [tags.number], color: "#b5cea8" },
	{
		tag: [tags.operator, tags.punctuation, tags.separator, tags.url, tags.escape, tags.regexp],
		color: "#d4d4d4",
	},
	{ tag: [tags.regexp], color: "#d16969" },
	{
		tag: [tags.special(tags.string), tags.processingInstruction, tags.string, tags.inserted],
		color: "#ce9178",
	},
	{ tag: [tags.angleBracket], color: "#808080" },
	{ tag: tags.strong, fontWeight: "bold" },
	{ tag: tags.emphasis, fontStyle: "italic" },
	{ tag: tags.strikethrough, textDecoration: "line-through" },
	{ tag: [tags.meta, tags.comment], color: "#6a9955" },
	{ tag: tags.link, color: "#6a9955", textDecoration: "underline" },
	{ tag: tags.invalid, color: "#ff0000" },
]);

export const darkTheme = [dark, syntaxHighlighting(myHighlightStyle)];
