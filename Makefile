examples := $(wildcard examples/*)

default: $(examples)

$(examples) :
	@echo
	@echo
	@echo $@
	@echo
	cd $@; npm install; npm test

.PHONY: $(examples)

clean:
	git clean -fdx
