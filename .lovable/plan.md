# AI-assisted project brief

## What will change
- Add a project-goals prompt and **Generate brief** action to the existing Start a Project form.
- Use the submitted project details to create a tailored, grounded first draft. Show it in the existing description field so the visitor can review and edit it before submitting.
- Keep the current contact, project type, budget, timeline, and email submission flow; the final edited brief goes to Scaletru's configured enquiry address.
- Provide clear generating, error, and retry states without losing what the visitor has entered.

## Technical approach
- Enable Lovable Cloud before adding the server-side AI capability, and call Lovable AI Gateway only from a TanStack Start server function. Keep the gateway key and prompt off the browser.
- Use the default text model and stream the one-shot generation on the server, returning the completed brief to the form. Validate and limit submitted input, and surface safe gateway errors without substituting a generic generated answer.
- Verify the flow in the preview, including generated draft editing, ordinary enquiry submission, and AI failure handling; check the build diagnostics.
