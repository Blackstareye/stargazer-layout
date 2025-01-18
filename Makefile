# Small Setup
doc?=_docs/sec/*.md
output?=README.md
root_file?=_docs/index.md

.PHONY: $(output) all help printout \
generate_readme diff clean

help: ## Show this help
	@printf "\033[33m%s:\033[0m\n" 'Available commands'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[32m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)


# Functions
clean: ## Clean Readme
	@if [ -f "$(output)" ]; then \
			rm $(output); \
		else \
			echo "$(output) existiert nicht."; \
		fi
diff: ## show diff
	git --no-pager  diff --stat   README.md  

generate_readme: 
	pandoc -s $(root_file) <(pandoc --shift-heading-level-by=1 $(doc) -t markdown) -o $(output)    

# Commands
all: clean generate_readme diff ## generate Readme 

printout: ## Print all variables
	@echo "Vars:"
	@echo "Rootfile $(root_file)"
	@echo "Input Folder: $(doc)"
	@echo "Output File: $(output)"
