
.PHONY: go js doc

go:
	chmod u+x ./scripts/compile-proto-go
	mkdir -p -m777 ./generated/go
	./scripts/compile-proto-go

js:
	chmod u+x ./scripts/compile-proto-js
	mkdir -p -m777 ./generated/js
	./scripts/compile-proto-js

doc:
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md