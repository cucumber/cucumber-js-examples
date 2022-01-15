examples := $(wildcard examples/*)

default: $(examples)
	@echo $<
	cd $<; npm install; npm test

clean:
	git clean -fdx
