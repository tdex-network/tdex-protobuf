// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: v1/transport.proto

package tdexv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TransportClient is the client API for Transport service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TransportClient interface {
	SupportedContentTypes(ctx context.Context, in *SupportedContentTypesRequest, opts ...grpc.CallOption) (*SupportedContentTypesReply, error)
}

type transportClient struct {
	cc grpc.ClientConnInterface
}

func NewTransportClient(cc grpc.ClientConnInterface) TransportClient {
	return &transportClient{cc}
}

func (c *transportClient) SupportedContentTypes(ctx context.Context, in *SupportedContentTypesRequest, opts ...grpc.CallOption) (*SupportedContentTypesReply, error) {
	out := new(SupportedContentTypesReply)
	err := c.cc.Invoke(ctx, "/tdex.v1.Transport/SupportedContentTypes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TransportServer is the server API for Transport service.
// All implementations should embed UnimplementedTransportServer
// for forward compatibility
type TransportServer interface {
	SupportedContentTypes(context.Context, *SupportedContentTypesRequest) (*SupportedContentTypesReply, error)
}

// UnimplementedTransportServer should be embedded to have forward compatible implementations.
type UnimplementedTransportServer struct {
}

func (UnimplementedTransportServer) SupportedContentTypes(context.Context, *SupportedContentTypesRequest) (*SupportedContentTypesReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SupportedContentTypes not implemented")
}

// UnsafeTransportServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TransportServer will
// result in compilation errors.
type UnsafeTransportServer interface {
	mustEmbedUnimplementedTransportServer()
}

func RegisterTransportServer(s grpc.ServiceRegistrar, srv TransportServer) {
	s.RegisterService(&Transport_ServiceDesc, srv)
}

func _Transport_SupportedContentTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SupportedContentTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportServer).SupportedContentTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tdex.v1.Transport/SupportedContentTypes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportServer).SupportedContentTypes(ctx, req.(*SupportedContentTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Transport_ServiceDesc is the grpc.ServiceDesc for Transport service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Transport_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "tdex.v1.Transport",
	HandlerType: (*TransportServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SupportedContentTypes",
			Handler:    _Transport_SupportedContentTypes_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "v1/transport.proto",
}
