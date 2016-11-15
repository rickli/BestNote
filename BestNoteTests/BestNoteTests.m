//
//  BestNoteTests.m
//  BestNoteTests
//
//  Created by rick on 26/10/2016.
//  Copyright © 2016 Wenba. All rights reserved.
//

#import <XCTest/XCTest.h>
#import <Kiwi/Kiwi.h>

SPEC_BEGIN(SimpleStringSpec)

describe(@"SimpleString", ^{
    context(@"when assigned to 'Hello world'", ^{
        NSString *greeting = @"Hello world";
        it(@"should exist", ^{
            [[greeting shouldNot] beNil];
        });
        
        it(@"should equal to 'Hello world'", ^{
            [[greeting should] equal:@"Hello world"];
        });
    });
});

SPEC_END

@interface BestNoteTests : XCTestCase

@end

@implementation BestNoteTests

- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testExample {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

@end
