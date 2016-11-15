//
//  User.h
//  BestNote
//
//  Created by rick on 08/11/2016.
//  Copyright © 2016 Wenba. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface User : NSObject
@property (class, nonatomic, assign, readonly) NSUInteger userCount;
@property (class, nonatomic, copy) NSUUID *identifier;

+ (void)resetIdentifier;
@end
