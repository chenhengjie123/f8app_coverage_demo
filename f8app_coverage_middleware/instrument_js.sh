ORIGIN_DIR="js"
INSTRUMENTED_DIR="../f8app/js"

echo "Instrumenting js files from ${ORIGIN_DIR} to ${INSTRUMENTED_DIR}"
nyc instrument ${ORIGIN_DIR} ${INSTRUMENTED_DIR}
