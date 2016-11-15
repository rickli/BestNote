//
//  User.m
//  BestNote
//
//  Created by rick on 08/11/2016.
//  Copyright © 2016 Wenba. All rights reserved.
//

#import "User.h"

@implementation User

static NSUUID *_identifier = nil;
static NSUInteger _userCount = 0;

- (instancetype)init {
    self = [super init];
    if (self) {
        _userCount += 1;
    }
    return self;
}

+ (NSUInteger)userCount {
    return _userCount;
}

+ (NSUUID *)identifier {
    if (_identifier == nil) {
        _identifier = [[NSUUID alloc] init];
    }
    return _identifier;
}

+ (void)setIdentifier:(NSUUID *)newIdentifier {
    if (newIdentifier != _identifier) {
        _identifier = [newIdentifier copy];
    }
}

+ (void)resetIdentifier {
    _identifier = [[NSUUID alloc] init];
}

@end
