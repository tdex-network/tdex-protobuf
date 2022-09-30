
.PHONY: lint swagger

lint:
	@echo "Linting protos..."
	@buf lint

swagger:
	@echo "Generating swagger..."
	@buf generate