#!/bin/bash
set -e
notice=$'// Copyright 2017 Jeremy Scheff\n// SPDX-License-Identifier: Apache-2.0\n\n'
# for f in src/*.ts; do
# for f in src/lib/*.ts; do
# for f in test/*.js; do
for f in test/.old/**/*.{js,ts}; do
  if grep -q Copyright "$f"; then
    continue
  fi
  echo -n "$notice" | cat - "$f" >"$f.new"
  mv "$f.new" "$f"
done
