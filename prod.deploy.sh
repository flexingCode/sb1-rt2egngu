#!/bin/bash
# Sync then invalidate Cloudfront
aws s3 sync ./build s3://onboardian-admin-prod
aws cloudfront create-invalidation --distribution-id EZ4GS9NE6BP4E --paths '/*'