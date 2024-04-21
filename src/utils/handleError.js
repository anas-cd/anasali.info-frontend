/**
 *
 * @param {Error} error
 * @param {String} message
 * @param {Boolean} uiFeedback whether to show the error to the user or not
 *
 * TODO: add error reporting to server.
 */

export default async function (
  error,
  message = "An error occured.",
  uiFeedback = false,
) {
  // -- dev only --
  console.log("error response: ", error.response);
  console.log("error stack: ", error.stack);
  console.log("message: ", message);
  // -- dev only --

  /* - showing error feedback to user if needed - */
  if (uiFeedback) {
    // - show error notification to user -
  }

  /* - add error to global (app level) errors list - */
  // - push error to errors list -

  /* - report error to backend - */
  // - send error(s) to backend via api endpoint -

  /* - update errors list - */
  // - delete reported errors from list -
}
