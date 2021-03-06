// Code generated by mockery v1.0.0. DO NOT EDIT.

package appserver

import (
	io "io"

	logging "github.com/SkycoinProject/skycoin/src/util/logging"
	mock "github.com/stretchr/testify/mock"

	appcommon "github.com/SkycoinProject/skywire-mainnet/pkg/app/appcommon"
)

// MockProcManager is an autogenerated mock type for the ProcManager type
type MockProcManager struct {
	mock.Mock
}

// Exists provides a mock function with given fields: name
func (_m *MockProcManager) Exists(name string) bool {
	ret := _m.Called(name)

	var r0 bool
	if rf, ok := ret.Get(0).(func(string) bool); ok {
		r0 = rf(name)
	} else {
		r0 = ret.Get(0).(bool)
	}

	return r0
}

// Range provides a mock function with given fields: next
func (_m *MockProcManager) Range(next func(string, *Proc) bool) {
	_m.Called(next)
}

// Start provides a mock function with given fields: log, c, args, stdout, stderr
func (_m *MockProcManager) Start(log *logging.Logger, c appcommon.Config, args []string, stdout io.Writer, stderr io.Writer) (appcommon.ProcID, error) {
	ret := _m.Called(log, c, args, stdout, stderr)

	var r0 appcommon.ProcID
	if rf, ok := ret.Get(0).(func(*logging.Logger, appcommon.Config, []string, io.Writer, io.Writer) appcommon.ProcID); ok {
		r0 = rf(log, c, args, stdout, stderr)
	} else {
		r0 = ret.Get(0).(appcommon.ProcID)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(*logging.Logger, appcommon.Config, []string, io.Writer, io.Writer) error); ok {
		r1 = rf(log, c, args, stdout, stderr)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Stop provides a mock function with given fields: name
func (_m *MockProcManager) Stop(name string) error {
	ret := _m.Called(name)

	var r0 error
	if rf, ok := ret.Get(0).(func(string) error); ok {
		r0 = rf(name)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// StopAll provides a mock function with given fields:
func (_m *MockProcManager) StopAll() {
	_m.Called()
}

// Wait provides a mock function with given fields: name
func (_m *MockProcManager) Wait(name string) error {
	ret := _m.Called(name)

	var r0 error
	if rf, ok := ret.Get(0).(func(string) error); ok {
		r0 = rf(name)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}
