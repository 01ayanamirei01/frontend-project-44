install :
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm piblish --dry-run
	
lint:
	npx eslint .

lint-fix:
	npx eslint --fix .